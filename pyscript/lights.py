# global set of all entity_ids currently in night light mode
night_light_entity_ids = set()


@service
def light_ambient_turn_on(
        light_entity_id=None,
        motion_sensor_entity_id=None,
        full_brightness=255,
        dim_brightness=50,
        dim_after_mins=2):

    task.unique(light_entity_id)

    # conditions
    if is_sun():
        return

    log.info(f"START light_ambient_turn_on: light_entity_id={light_entity_id}")

    # TURN ON
    if needs_full_brightness(light_entity_id):
        log.info(f"Turn {light_entity_id} to full brightness")
        light.turn_on(entity_id=light_entity_id, brightness=full_brightness)
    else:
        log.info(f"Turn {light_entity_id} to low brightness")
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
        light.turn_off(entity_id=light_entity_id, transition=60)
    else:
        light.turn_on(entity_id=light_entity_id,
                      transition=60, brightness=dim_brightness)

    task.sleep(60)
    night_light_entity_ids.discard(light_entity_id)

    log.info(f"END light_ambient_turn_on: light_entity_id={light_entity_id}")


def is_sun():
    return binary_sensor.sun == 'on'


def needs_full_brightness(light_entity_id):
    if state.get('script.lights_ambient_turn_on') == 'on':
        return True
    if state.get('script.lights_ambient_turn_off') == 'on':
        return False
    if light_entity_id in night_light_entity_ids:
        return False
    return state.get(light_entity_id) == 'on'


def turn_light_off(light_entity_id):
    return light_entity_id in night_light_entity_ids or state.get('script.lights_ambient_turn_off') == 'on'
