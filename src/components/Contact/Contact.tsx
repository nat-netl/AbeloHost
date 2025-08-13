import { IContact } from "@/types/contact";
import { LinkOverlay } from "@/ui-components/links/Link";
import Image from "next/image";
import { FC } from "react";

import styles from "./styles.module.scss";

const Contact: FC<IContact> = ({ name, image, contact, href }) => (
  <LinkOverlay className={styles.contact} href={href}>
    <Image height="15" src={image} alt={name} />
    <span>{contact}</span>
  </LinkOverlay>
);

export default Contact;
