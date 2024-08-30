import { ReactElement } from "react";
import uuid from "react-uuid";
import { CheckboxObject } from "../../types";
import Checkbox from "./Checkbox";

const data: CheckboxObject[] = [
  {
    keyName: "enableCapitalize",
    text: "ใช้ตัวพิมพ์ใหญ่",
  },
  {
    keyName: "enableIndentation",
    text: "ใช้การเยื้อง",
  },
  {
    keyName: "enableSeparator",
    text: "ใช้ตัวคั่น",
  },
];

const Checkboxes = (): ReactElement<HTMLDivElement> => {
  return (
    <div className="w-max mt-3 flex flex-col items-start justify-between">
      {data.map(
        (
          checkbox: CheckboxObject,
          index: number
        ): ReactElement<HTMLSpanElement> => (
          <Checkbox
            key={uuid()}
            {...checkbox}
            id={`checkbox-${index + 1}`}
          />
        )
      )}
    </div>
  );
};

export default Checkboxes;
