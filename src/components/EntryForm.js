import React from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";
import useEntryDetails from "../hooks/useEntryDetails";

const EntryForm = () => {
  const {
    description,
    value,
    setDescription,
    setValue,
    isExpensive,
    setIsExpensive,
  } = useEntryDetails();
  return (
    <>
      <Form.Group widths={3}>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></Form.Input>
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="is expense"
          checked={isExpensive}
          onChange={() => setIsExpensive((oldState) => !oldState)}
        />
      </Segment>
    </>
  );
};

export default EntryForm;
