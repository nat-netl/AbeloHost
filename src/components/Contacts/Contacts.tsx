import useAuthStore from "@/store/authStore";
import { DeffaultButton } from "@/ui-components/buttons/DeffaultButton";
import { LinkOverlay } from "@/ui-components/links/Link";
import Image from "next/image";

import person from "../../../assets/icons/person.svg";
import Contact from "../Contact/Contact";
import { contactsData } from "./contactsData";
import styles from "./styles.module.scss";

const Introduction = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className={styles.wrapper}>
      <div className={styles.contacts}>
        {contactsData.map((contact) => (
          <Contact key={contact.id} {...contact} />
        ))}
      </div>

      <div className={styles.auth}>
        {user ? (
          <>
            <span className={styles.contact}>
              <Image height="15" src={person} alt="person" />
              {user.firstName} {user.lastName}
            </span>
            <DeffaultButton className={styles.logout} onClick={logout}>
              Logout
            </DeffaultButton>
          </>
        ) : (
          <LinkOverlay className={styles.contact} href="/login">
            <Image height="15" src={person} alt="person" />
            <span>Login</span>
          </LinkOverlay>
        )}
      </div>
    </div>
  );
};

export default Introduction;
