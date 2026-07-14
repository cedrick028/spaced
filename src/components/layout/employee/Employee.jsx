import { UserPen } from "lucide-react";
import useEmployee from "../../../hooks/useEmployee";
import useModal from "../../../hooks/useModal";
import useTask from "../../../hooks/useTask";
import { generateIcon } from "../../../utils/iconFormatter";
import { trimId } from "../../../utils/idFormatter";
import Button from "../../UI/button/Button";
import UpdateUser from "../../UI/forms/update user/UpdateUser";
import Modal from "../../UI/modal/Modal";

/* eslint-disable react/prop-types */
export default function Employee({ fName, lName, id, email, position, department }) {
  const { deleteEmployee } = useEmployee();
  const { deleteTasksByEmployeeName } = useTask();
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleDelete = async () => {
    await deleteTasksByEmployeeName(fName.concat(` ${lName}`))
    await deleteEmployee(id)
  }

  return (
    <div className="flex items-center p-2 border rounded-md cursor-pointer hover:bg-shade">
      <div className="w-[18%] flex items-center gap-2">
        <div className="w-7 h-7 flex items-center justify-center font-medium text-dark border rounded-md bg-fair">{generateIcon(fName, lName)}</div>
        <p>{`${fName} ${lName}`}</p>
      </div>
      <p className="w-[15%]">ID: { trimId(id, '-', 0) }</p>
      <p className="w-[22%]">{ email }</p>
      <p className="w-[15%]">{ position }</p>
      <p className="w-[15%]">{ department }</p>
      <div className="w-[15%] flex justify-end gap-2">
        <Button label="Update" variant="secondary" onClick={openModal} />
        <Button label="Delete" variant="delete" onClick={handleDelete} />
      </div>

      {
        isModalOpen && (
          <Modal label="Update User" icon={UserPen} closeModal={closeModal}>
            <UpdateUser closeModal={closeModal} selectedUserId={id} />
          </Modal>
        )
      }
    </div>
  )
}