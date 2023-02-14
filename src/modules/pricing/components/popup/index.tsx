/* eslint-disable import/no-extraneous-dependencies */
import { useLocalization } from "@hooks/useLocalization";
import { options } from "@modules/pricing/api";
import { CreateOrderActions, CreateOrderData } from "@paypal/paypal-js/types/components/buttons";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ChoosedPlan } from "@types";
import React, { MouseEvent } from "react";

import { Benefit, Block, DescriptionWrapper, Price, Title, Wrapper } from "./styled";

type PopupProps = {
  plan: ChoosedPlan;
  closePopup: () => void;
};

export const Popup = ({ plan, closePopup }: PopupProps) => {
  const { name, price, benefits } = plan;
  const { t } = useLocalization();

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const createOrder = (_: CreateOrderData, actions: CreateOrderActions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: name,
          amount: {
            value: String(price),
          },
        },
      ],
    });
  };

  return (
    <PayPalScriptProvider options={options}>
      <Wrapper onClick={closePopup}>
        <Block onClick={handleClick}>
          <DescriptionWrapper>
            <Title>
              {t("pricingSection.plan")}: {name}
            </Title>
            <Price>
              {t("pricingSection.price")}: ${price}
            </Price>
            <div>
              {benefits.map((item, index) => (
                <Benefit key={index}>{item}</Benefit>
              ))}
            </div>
          </DescriptionWrapper>
          <PayPalButtons style={{ layout: "vertical" }} createOrder={createOrder} />
        </Block>
      </Wrapper>
    </PayPalScriptProvider>
  );
};
