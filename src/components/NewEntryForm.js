import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";

const NewEntryForm = () => {
  const {
    description,
    value,
    setDescription,
    setValue,
    isExpensive,
    setIsExpensive,
    addEntry,
  } = useEntryDetails();

  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpensive={isExpensive}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpensive={setIsExpensive}
      />
      <ButtonSaveOrCancel addEntry={addEntry} />
    </Form>
  );
};

export default NewEntryForm;
