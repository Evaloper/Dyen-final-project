import React from "react";
import { Header } from "../../organisms";
import { AvatarText, IconText } from "../../molecules";
import { PageTemplate } from "../../templates/PageTemplate";
import { Table } from "../../organisms/Table";

export function Balances() {
  return (
    <PageTemplate>
      <div className="">
        <div>
          <AvatarText
            src="https://yt3.ggpht.com/yti/AOXPAcWKgOiWQoWF2k8EWq25k0X9K0lUFd129XXkcWPqFCM=s88-c-k-c0x00ffffff-no-rj-mo"
            text="Cloud Newton"
          />
          <IconText name="mail" text="claudnew@gmail.com" />
          <IconText name="calendar" text="Aug 5, 3:16 AM" />
          <IconText name="hashtag" text="#42D42-0001" />
        </div>
        <div className="table">
          <Table />
        </div>
      </div>
    </PageTemplate>
  );
}
