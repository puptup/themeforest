import React from "react";

import { PopupWrapper } from "./styled";

type PopupProps = {
  close: () => void;
};

export const Popup = ({ close }: PopupProps) => {
  return (
    <PopupWrapper onClick={close}>
      <iframe
        width="1000"
        height="600"
        src="https://www.youtube.com/embed/iA8nxSf-HAc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </PopupWrapper>
  );
};
