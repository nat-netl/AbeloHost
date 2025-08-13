import { IContact } from "@/types/contact";

import email from "../../../assets/icons/email.svg";
import place from "../../../assets/icons/place.svg";
import telephone from "../../../assets/icons/telephone.svg";

export const contactsData: IContact[] = [
  {
    id: 0,
    name: "email",
    contact: "shop@abelohost.ru",
    image: email,
    href: "mailto:shop@abelohost.ru",
  },
  {
    id: 1,
    name: "place",
    contact: "173 Stonecoal Road",
    image: place,
    href: "",
  },
  {
    id: 2,
    name: "telephone",
    contact: "013-13-32-21",
    image: telephone,
    href: "tel:013-13-32-21",
  },
];
