import React from "react";
import EntryLine from "./EntryLine";

const EntryLines = ({ entries }) => {
  return entries && entries?.map((entry) => {
    return <EntryLine key={entry.id} {...entry} />;
  });
};

export default EntryLines;
