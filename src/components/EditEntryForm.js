import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

const EditEntryForm = ({
  description,
  editEntry,
  id,
  isExpensive,
  value,
}) => {
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        isExpensive={isExpensive}
        value={value}
      />
      <ButtonSaveOrCancel
        addEntry={editEntry}
        description={description}
        id={id}
        isExpensive={isExpensive}
        value={value}
      />
    </Form>
  );
};

export default EditEntryForm;
