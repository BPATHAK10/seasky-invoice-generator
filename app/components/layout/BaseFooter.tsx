"use client";

import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function BaseFooter() {
  return (
    <>
      <section className=" bg-black text-white ">
        <div className="culm grid sm:grid-cols-4 grid-cols-1 pb-3">
          {/* contact us */}
          <div className="flex flex-col ">
            <h3>Contact Us</h3>
            <br />
            <div className="flex flex-cols gap-2">
              <div className="text-secondary-400 flex flex-col gap-2">
                <LocalPhoneOutlinedIcon />
                <EmailOutlinedIcon />
                <LocationOnOutlinedIcon />
              </div>
              <div className="flex flex-col gap-2">
                <div>+977-15570460</div>
                <div>seaskynepal@gmail.com</div>
                <div>
                  Sea Sky Cargo Service (P) Ltd, Ward No 26, Dholahiti,
                  Lalitpur,Nepal
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="culm gap-4 py-4">
          <hr className="text-white" />
          <p className="text-center">
            © 2023 SEASKY CARGO SERVICE (P) LTD. NEPAL
          </p>
        </div>
      </section>
      <section className="bg-emerald-500  py-4 text-white flex flex-row items-end justify-center gap-3">
        <div className=" text-xl text-center">
          Designed and Developed with ♥ by:
        </div>
        <Image src="/assets/img/niyaloLogo.svg" alt="logo" width={70} height={70} />
      </section>
    </>
  );
}
