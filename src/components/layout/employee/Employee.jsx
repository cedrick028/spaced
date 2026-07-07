import { generateIcon } from "../../../utils/iconFormatter";
import { trimId } from "../../../utils/idFormatter";
import { formatString } from "../../../utils/upperCasedFirstLetter";

/* eslint-disable react/prop-types */
export default function Employee({ fName, lName, id, email, position, department, role }) {
  return (
    <div className="flex items-center p-2 border rounded-md cursor-pointer hover:bg-shade">
      <div className="w-2/12 flex items-center gap-2">
        <div className="w-7 h-7 flex items-center justify-center font-medium text-dark border rounded-md bg-fair">{generateIcon(fName, lName)}</div>
        <p>{`${fName} ${lName}`}</p>
      </div>
      <p className="w-2/12">ID: { trimId(id, '-', 0) }</p>
      <p className="w-3/12">{ email }</p>
      <p className="w-2/12">{ position }</p>
      <p className="w-2/12">{ department }</p>
      <p className="w-1/12">{ formatString(role) }</p>
    </div>
  )
}