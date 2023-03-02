@service
def adjust_volume(
  volume_sensor_entity_id=None,
  media_player_entity_id=None):

    task.unique(media_player_entity_id)

    target_volume = round_val(state.get(volume_sensor_entity_id))

    log.info(f"START adjust_volume: Set [{media_player_entity_id}] to: {target_volume}")
    set_volume(media_player_entity_id, target_volume)
    log.info(f"PROGRESS adjust_volume: Volume set to [{target_volume}] for entity: {media_player_entity_id}")

    if media_player_is_off(media_player_entity_id):
      log.info(f"PROGRESS adjust_volume: Media player [{media_player_entity_id}] is: off")
    else:
      retry = 0
      while not media_player_is_off(media_player_entity_id) and media_player_volume_level(media_player_entity_id) != target_volume and retry < 10:
          log.info(f"RETRY {retry} adjust_volume: Set volume from [{media_player_volume_level(media_player_entity_id)}] to [{target_volume}] for entity: {media_player_entity_id}")
          set_volume(media_player_entity_id, target_volume)
          retry += 1

    log.info(f"END adjust_volume: Set [{media_player_entity_id}] to: {target_volume}")

def media_player_is_off(media_player_entity_id):
  return state.get(media_player_entity_id) == 'off'

def media_player_volume_level(media_player_entity_id):
  try:
    volume_level = state.get(media_player_entity_id + ".volume_level")
    return round_val(volume_level)
  except AttributeError:
    return None

def set_volume(media_player_entity_id, target_volume):
  rounded_target_volume = round_val(target_volume)
  service.call("media_player", "volume_set", entity_id=media_player_entity_id, blocking=True, volume_level=rounded_target_volume)
  task.sleep(0.5)

def round_val(val):
   if val is None:
      return None
   return round(float(val), 2)