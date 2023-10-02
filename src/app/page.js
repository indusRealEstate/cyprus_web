import Home from "./home/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "Premium Realtor | Explore International Properties",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
