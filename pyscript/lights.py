from datetime import datetime
from datetime import timezone

# global set of all entity_ids currently in night light mode
night_light_entity_ids = set()
active_light_entity_ids = set()


@service
def light_ambient_turn_on(
        light_entity_id=None,
        motion_sensor_entity_id=None,
        dim_brightness=50,
        dim_after_mins=2):

    task.unique(light_entity_id)
    active_light_entity_ids.add(light_entity_id)

    # conditions
    if is_sun():
        return

    log.info(f"START light_ambient_turn_on: light_entity_id={light_entity_id}")

    # TURN ON
    full_brightness, brightness_reason = needs_full_brightess(light_entity_id)
    if full_brightness:
        log.info(
            f"RUN light_ambient_turn_on: Turning light to full brightness. light_entity_id={light_entity_id}, brightness_reason={brightness_reason}")
        light.turn_on(entity_id=light_entity_id, brightness=255)
    else:
        log.info(
            f"RUN light_ambient_turn_on: Turning light to low brightness. light_entity_id={light_entity_id}, brightness_reason={brightness_reason}")
        night_light_entity_ids.add(light_entity_id)
        light.turn_on(entity_id=light_entity_id, brightness=dim_brightness)
    turn_light_off_at_start = turn_light_off(light_entity_id)

    # SLEEP
    task.wait_until(
        state_trigger=f"{motion_sensor_entity_id} == 'off'", timeout=60 * 60)
    task.sleep(dim_after_mins * 60)

    # TURN OFF
    turn_light_off_at_end = turn_light_off(light_entity_id)
    if turn_light_off_at_start or turn_light_off_at_end:
        log.info(
            f"RUN light_ambient_turn_on: Turning off light. light_entity_id={light_entity_id}")
        light.turn_off(entity_id=light_entity_id, transition=60)
    else:
        log.info(
            f"RUN light_ambient_turn_on: Dimming light. light_entity_id={light_entity_id}")
        light.turn_on(entity_id=light_entity_id,
                      transition=60, brightness=dim_brightness)

    task.sleep(60)
    night_light_entity_ids.discard(light_entity_id)
    active_light_entity_ids.discard(light_entity_id)

    log.info(f"END light_ambient_turn_on: light_entity_id={light_entity_id}")


@state_trigger("script.lights_ambient_turn_on == 'on'")
def reset_light_ambient_turn_on():
    for light_entity_id in active_light_entity_ids:
        log.info(
            f"Resetting {light_entity_id} due to 'script.lights_ambient_turn_on'")
        task.unique(light_entity_id)
        active_light_entity_ids.discard(light_entity_id)
    active_light_entity_ids.clear()


@state_trigger("script.lights_ambient_turn_off == 'on'")
def reset_light_ambient_turn_off():
    for light_entity_id in active_light_entity_ids:
        log.info(
            f"Resetting {light_entity_id} due to 'script.lights_ambient_turn_off'")
        task.unique(light_entity_id)
    active_light_entity_ids.clear()


def is_sun():
    return binary_sensor.sun == 'on'


def needs_full_brightess(light_entity_id):
    if state.get('script.lights_ambient_turn_on') == 'on':
        return True, '"script.lights_ambient_turn_on" is on'
    if state.get('script.lights_ambient_turn_off') == 'on':
        return False, '"script.lights_ambient_turn_off" is on'
    sun_state_changed_secs = (datetime.now(
        tz=timezone.utc) - binary_sensor.sun.last_changed).total_seconds()
    if sun_state_changed_secs < 300:
        return True, '"sun set less than 5 minutes ago"'
    if light_entity_id in night_light_entity_ids:
        return False, 'night_light is on'
    if state.get(light_entity_id) == 'on':
        return True, 'light is on'
    return False, "default value if no other condition met"


def turn_light_off(light_entity_id):
    if light_entity_id in night_light_entity_ids:
        return True
    if state.get('script.lights_ambient_turn_off') == 'on':
        return True
    if state.get(light_entity_id) == 'off':
        return True
    return False
