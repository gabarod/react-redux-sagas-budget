import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.actions";
import { v4 as uuidv4 } from "uuid";
import { closeEditModal } from "../actions/modal.actions";

function useEntryDetails(desc = "", val = "", isExp = true) {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpensive, setIsExpensive] = useState(isExp);

  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setIsExpensive(isExp);
    setValue(val);
  }, [desc, val, isExp]);

  const updateEntry = (id) => {
    dispatch(
      updateEntryRedux(id, {
        id,
        description,
        value,
        isExpensive,
      })
    );
    dispatch(closeEditModal());
    resetValues();
  };

  const addEntry = () => {
    const entry = {
      id: uuidv4(),
      description,
      value: Number(value),
      isExpensive,
    };
    dispatch(addEntryRedux(entry));
    resetValues();
  };

  const resetValues = () => {
    setDescription("");
    setValue("");
    setIsExpensive(false);
  };

  return {
    description,
    value,
    setDescription,
    setValue,
    isExpensive,
    setIsExpensive,
    addEntry,
    updateEntry,
  };
}

export default useEntryDetails;
