import Home from "./home/page";
import Wrapper from "./layout-wrapper/wrapper";

// export const metadata = {
//   title: "Premium Realtor | Explore International Properties",
// };

export async function generateMetadata() {
  let title = "";
  if (typeof window !== "undefined") {
    var language = window.navigator.language;
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (
    language == "ru" ||
    timezone == "Europe/Moscow" ||
    timezone == "Europe/Kaliningrad" ||
    timezone == "Europe/Samara" ||
    timezone == "Asia/Yekaterinburg" ||
    timezone == "Asia/Omsk" ||
    timezone == "Asia/Krasnoyarsk" ||
    timezone == "Asia/Novosibirsk" ||
    timezone == "Asia/Irkutsk" ||
    timezone == "Asia/Chita" ||
    timezone == "Asia/Vladivostok" ||
    timezone == "Asia/Magadan" ||
    timezone == "Asia/Srednekolymsk" ||
    timezone == "Asia/Anadyr" ||
    timezone == "Asia/Anadyr"
  ) {
    title = "Премиум Риэлтор | Исследуйте международную недвижимость";
  } else if (
    language == "zh" ||
    timezone == "Asia/Shanghai" ||
    timezone == "Asia/Beijing"
  ) {
    title = "高级房地产经纪人|探索国际房产";
  } else {
    title = "Premium Realtor | Explore International Properties";
  }

  return {
    title: title,
  };
}

export default function MainRoot() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
