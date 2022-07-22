import { FC } from "react";
import { PageWrapperContainer } from "../mui_styles/styles";

type Props = {
  children: JSX.Element[];
  paddingLeft: string;
};

export const PageWrapper: FC<Props> = ({ children, paddingLeft }) => {
  return (
    <PageWrapperContainer sx={{ paddingLeft: paddingLeft }}>
      {children}
    </PageWrapperContainer>
  );
};
