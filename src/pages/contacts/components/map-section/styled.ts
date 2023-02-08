import { device } from "@constants/devices";
import { MapContainer as UIMapContainer } from "react-leaflet";
import styled from "styled-components";

export const MapContainer = styled(UIMapContainer)`
  height: 460px;

  @media ${device.laptop} {
    height: 290px;
  }
`;
