import React from 'react';
import { InfoMenu } from './Footer/InfoMenu';
import { Payment } from './Footer/Payment';
import { Copyright } from './Footer/Copyright';
import { Contacts } from './Footer/Contacts';

export function Footer(): JSX.Element {
  return (
    <>
      <div className="col">
        <InfoMenu />
      </div>
      <div className="col">
        <Payment />
        <Copyright />
      </div>
      <div className="col text-end">
        <Contacts />
      </div>
    </>
  );
}

export default Footer;
