import * as React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

const iconProps = {
  size: 36,
  round: true,
  iconFillColor: 'var(--color-text)',
  bgStyle: { fill: 'transparent' },
};

const Share = ({ url, title, description, siteUrl, twitterId }) => {
  return (
    <div className="flex space-x-1 items-center">
      <p className="uppercase tracking-widest text-xs text-gray-500 mr-5">
        Share Article
      </p>
      <EmailShareButton url={url} subject={title}>
        <EmailIcon {...iconProps} />
      </EmailShareButton>
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon {...iconProps} />
      </FacebookShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        summary={description}
        source={siteUrl}
      >
        <LinkedinIcon {...iconProps} />
      </LinkedinShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        via={twitterId.split('@').join('')}
      >
        <TwitterIcon {...iconProps} />
      </TwitterShareButton>
    </div>
  );
};

export default Share;
