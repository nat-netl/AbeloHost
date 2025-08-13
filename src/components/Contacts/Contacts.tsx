"use client";

import useAuthStore from "@/store/authStore";
import { DeffaultButton } from "@/ui-components/buttons/DeffaultButton";
import { LinkOverlay } from "@/ui-components/links/Link";
import classNames from "classnames";
import Image from "next/image";

import email from "../../../assets/icons/email.svg";
import person from "../../../assets/icons/person.svg";
import place from "../../../assets/icons/place.svg";
import telephone from "../../../assets/icons/telephone.svg";
import styles from "./styles.module.scss";

const Contacts = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className={styles.box}>
      <div className={classNames("container", styles.wrapper)}>
        <div className={styles.contacts}>
          <LinkOverlay className={styles.contact} href="tel:+013-13-32-21">
            <Image height="15" src={telephone} alt="telephone" />
            <span>013-13-32-21</span>
          </LinkOverlay>
          <LinkOverlay className={styles.contact} href="mailto:shop@abelohost.com">
            <Image height="15" src={email} alt="email" />
            <span>shop@abelohost.ru</span>
          </LinkOverlay>
          <LinkOverlay className={styles.contact} href="/">
            <Image height="15" src={place} alt="place" />
            <span>173 Stonecoal Road</span>
          </LinkOverlay>
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
    </div>
  );
};

export default Contacts;
