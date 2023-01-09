/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@udecode/plate-test-utils";

jsx;

const initialValueRaw: any = (
  <fragment>
    <hh1>
      <htext />
    </hh1>
    <hp>
      <htext />
    </hp>
  </fragment>
);

let id = 0;
export const initialValue = initialValueRaw.map((node: any) => {
  id++;
  return { ...node, id: id.toString() };
});
