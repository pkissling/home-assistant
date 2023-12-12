import math

@service
def adjust_light(entity_id, brightness, transition, color_temp_kelvin=None):

    log.info(f"START adjust_light: entity_id={entity_id}, brightness={brightness}, color_temp_kelvin={color_temp_kelvin}, transition={transition}")
    task.unique(entity_id)

    if brightness < 0 or brightness > 255:
        log.error(f"ERROR adjust_light: brightness [{brightness}] must be between 0 and 255")
        return

    if state.get(entity_id) == 'off' and brightness == 0:
        log.info(f"SKIP adjust_light: Light [{entity_id}] is already off")
        return

    if state.get(entity_id) == 'on' and state.get(entity_id).brightness == brightness and color_temp_kelvin is not None and state.get(entity_id).color_temp_kelvin == color_temp_kelvin:
        log.info(f"SKIP adjust_light: Light [{entity_id}] is already in target state")
        return

    if state.get(entity_id) == 'on' and state.get(entity_id).brightness == brightness and color_temp_kelvin is None:
        log.info(f"SKIP adjust_light: Light [{entity_id}] is already in target state")
        return

    adapt_light(entity_id, brightness, transition, color_temp_kelvin)

    task.sleep(transition + 1)

    retries = 0
    while retries < 10 and light_has_target_state(entity_id, brightness) is False:
        transition = max(1, math.floor(transition / 2))
        log.info(f"RETRY {retries} adjust_light: Light [{entity_id}] was supposed to have brightness [{brightness}] but has [{state.get(entity_id).brightness}]")
        adapt_light(entity_id, brightness, transition, color_temp_kelvin)
        task.sleep(transition + 1)
        retries += 1

    if retries == 10 and light_has_target_state(entity_id, brightness) is False:
        log.error(f"RETRY ERROR adjust_light: After 10 retries light [{entity_id}] still was supposed to have brightness [{brightness}] but has [{state.get(entity_id).brightness}]")

    log.info(f"END adjust_light: entity_id={entity_id}, brightness={brightness}, color_temp_kelvin={color_temp_kelvin}, transition={transition}")

def adapt_light(entity_id, brightness, transition, color_temp_kelvin=None):
    if brightness == 0:
        light.turn_off(entity_id=entity_id, transition=transition)
        log.info(f"PROGRESS adjust_light: light.turn_off(entity_id={entity_id}, transition={transition})")
    elif color_temp_kelvin is not None:
        light.turn_on(entity_id=entity_id, brightness=brightness, transition=transition, color_temp_kelvin=color_temp_kelvin)
        log.info(f"PROGRESS adjust_light: light.turn_on(entity_id={entity_id}, brightness={brightness}, transition={transition}, color_temp_kelvin={color_temp_kelvin})")
    else:
        light.turn_on(entity_id=entity_id, brightness=brightness, transition=transition)
        log.info(f"PROGRESS adjust_light: light.turn_on(entity_id={entity_id}, brightness={brightness}, transition={transition})")

def light_has_target_state(entity_id, brightness):
    if brightness == 0:
        return state.get(entity_id) == 'off'
    else:
        return state.get(entity_id).brightness == brightness
