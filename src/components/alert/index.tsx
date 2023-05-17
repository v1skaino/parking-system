import Swal from "sweetalert2";

interface SwalPropTypes {
  icon: "success" | "error" | "warning" | "info" | "question";
  title: string;
  confirmButtonLabel: string;
  cancelButtonLabel: string;
}

export const handleAlert = ({
  icon,
  title,
  cancelButtonLabel,
  confirmButtonLabel,
}: SwalPropTypes) => {
  const result = Swal.fire({
    width: 300,
    title: title,
    icon: icon,
    iconColor: "#666",
    showCancelButton: true,
    confirmButtonColor: "#008000",
    cancelButtonColor: "#ed0020",
    confirmButtonText: confirmButtonLabel,
    cancelButtonText: cancelButtonLabel,
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });

  return result;
};
