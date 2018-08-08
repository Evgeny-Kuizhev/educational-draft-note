-- создаю триггер на увеличение тегов
CREATE TRIGGER incr_tags_count
AFTER INSERT ON Note_Tag
FOR EACH ROW
BEGIN
  UPDATE Note SET tags_count=tags_count+1
   WHERE id=NEW.note_id;
END;

-- создаю триггер на уменьшение тегов
CREATE TRIGGER decr_tags_count
AFTER DELETE ON Note_Tag
FOR EACH ROW
BEGIN
  UPDATE Note SET tags_count=tags_count-1
   WHERE id=OLD.note_id;
END;