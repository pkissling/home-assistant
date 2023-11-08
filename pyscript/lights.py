@service
def adjust_light(entity_id, brightness, transition, color_temp_kelvin=None):

    task.unique(entity_id)
    log.info(f"START adjust_light: entity_id={entity_id}, brightness={brightness}, color_temp_kelvin={color_temp_kelvin}, transition={transition}")

    # Get current state
    light_entity = state.get(entity_id)

    if color_temp_kelvin is not None:
        light.turn_on(entity_id=entity_id, brightness=brightness, transition=transition, color_temp_kelvin=color_temp_kelvin)
    else:
        light.turn_on(entity_id=entity_id, brightness=brightness, transition=transition)
