import Img from "@assets/img_7.png";
import { postIcons } from "@assets/post-icons";
import { BlogCardType } from "@types";
import { useTranslation } from "react-i18next";

import { Icon, Image, Info, InfoWrapper, Quote, Tag, Text, TextWrapper, Title } from "./styled";

type PostProps = {
  post: BlogCardType;
};

export const Post = ({ post }: PostProps) => {
  const { date, author, views, tags, title } = post;
  const { t } = useTranslation();

  return (
    <div>
      <Image src={Img} />
      <InfoWrapper>
        <Info>
          <Icon src={postIcons.calendar} /> {date}
        </Info>
        <Info>
          <Icon src={postIcons.person} /> {author}
        </Info>
      </InfoWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Text>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus consectetur eros
          non iaculis{" "}
          <i>
            “Vivamus lectus enim, convallis nec dapibus vel, semper id ante. Morbi pulvinar sapien
            nulla, eu dignissim enim ullamcorper vitae”.
          </i>
        </Text>
        <Text>
          Ut sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus
          dignissim pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec
          cursus mi, sed blandit.
        </Text>
        <Text>
          Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et,
          euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id, lacinia auctor
          orci. Sed quis lobortis eros. Fusce id commodo libero.
        </Text>

        <Quote>
          “Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
          tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo
          libero”
        </Quote>

        <Text>
          Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit
          facilisis volutpat venenatis.
          <b>
            Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat
            libero velit, et mattis tortor placerat eget.
          </b>
        </Text>
        <Text>
          Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus iaculis. Sed
          placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex
          nunc ac diam.
        </Text>
      </TextWrapper>
      <InfoWrapper>
        <Info>
          <Icon src={postIcons.dataLine} /> {views} {t("blogPost.views")}
        </Info>
        <Info>
          <Icon src={postIcons.tag} /> {t("blogPost.tags")}:
          {tags.map((el, index) => (
            <Tag key={index}>{el}</Tag>
          ))}
        </Info>
      </InfoWrapper>
    </div>
  );
};
