import { useState } from "react";
export function useOrderForm() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    imei: "",
    repairStart: "",
    description: "",
    active: false,
    wishes: ""
  });
  return [formData, setFormData];
}
