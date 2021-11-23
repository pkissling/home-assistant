@service
def light_ambient_turn_on(
  light_entity_id=None, 
  motion_sensor_entity_id=None, 
  full_brightness=200,
  dim_brightness=50,
  dim_after_mins=2):

    task.unique(light_entity_id)

    # conditions
    if not meets_conditions():
      return

    log.info(f"START light_ambient_turn_on: light_entity_id={light_entity_id}")
   
    # action
    if needs_full_brightness(light_entity_id):
        log.info(f"Turn {light_entity_id} to full brightness")

        # turn lights to full brightness
        light.turn_on(entity_id=light_entity_id, brightness=full_brightness)

        # wait until motion sensor is off
        task.wait_until(state_trigger=f"{motion_sensor_entity_id} == 'off'", timeout=60 * 60)
        
        # sleep for x mins before turning off lights
        task.sleep(dim_after_mins * 60)

        # dim light iff its still on.
        if is_light_on(light_entity_id):
            light.turn_on(entity_id=light_entity_id, transition=60, brightness=dim_brightness)

    else:

      log.info(f"Turn {light_entity_id} to low brightness")

      # turn on night light mode
      input_boolean.turn_on(entity_id='input_boolean.night_light')

      # turn on light with low brightness
      light.turn_on(entity_id=light_entity_id, brightness=dim_brightness)

      # wait until no more motion
      task.wait_until(state_trigger=f"{motion_sensor_entity_id} == 'off'", timeout=60 * 60)

      # sleep for 5 mins before turning off lights
      task.sleep(5 * 60)

      # turn off lights
      light.turn_off(entity_id=light_entity_id, transition=60)

      # wait max 10 mins until lights off to turn off night light
      task.wait_until(state_trigger=f"{light_entity_id} == 'off'", timeout=60 * 60)
      input_boolean.turn_off(entity_id='input_boolean.night_light')

    log.info(f"END light_ambient_turn_on: light_entity_id={light_entity_id}")


def meets_conditions():
  return (vacuum.xiaomi_vacuum_cleaner != 'cleaning'
    and vacuum.xiaomi_vacuum_cleaner != 'returning'
    and binary_sensor.sun == 'off')

def needs_full_brightness(light_entity_id):
  return (is_light_on(light_entity_id)
      and input_boolean.night_light == 'off')

def is_light_on(light_entity_id):
  return (state.get(light_entity_id) == 'on'
      and state.get('script.lights_ambient_turn_off') == 'off')