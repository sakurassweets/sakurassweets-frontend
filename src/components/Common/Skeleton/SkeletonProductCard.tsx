import ContentLoader, { IContentLoaderProps } from 'react-content-loader';
import { JSX } from 'react/jsx-runtime';

export const SkeletonProductCard = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={3}
    width={302}
    height={501}
    viewBox="0 0 302 501"
    backgroundColor="#efebeb"
    foregroundColor="#404966"
    {...props}
  >
    <rect x="24" y="24" rx="4" ry="4" width="254" height="180" />
    <rect x="23" y="212" rx="0" ry="0" width="254" height="18" />
    <rect x="24" y="250" rx="0" ry="0" width="143" height="24" />
    <rect x="24" y="286" rx="0" ry="0" width="254" height="47" />
    <rect x="332" y="260" rx="4" ry="4" width="254" height="180" />
    <rect x="24" y="353" rx="0" ry="0" width="84" height="24" />
    <rect x="26" y="516" rx="4" ry="4" width="254" height="47" />
    <rect x="24" y="381" rx="0" ry="0" width="108" height="24" />
    <rect x="24" y="429" rx="8" ry="8" width="254" height="48" />
  </ContentLoader>
);
