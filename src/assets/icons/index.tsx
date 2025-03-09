import { JSX } from 'react';

type iconFunction = {
  (
    className?: string | undefined,
    fill?: string,
    width?: number | string,
    height?: number | string,
  ): JSX.Element;
};

const icons: Record<string, iconFunction> = {
  left_arrow: (
    className = undefined,
    fill = '#FFFF',
    width = '100%',
    height = '100%',
  ) => (
    <svg
      className={className}
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2">
        <g data-name="arrow-ios-back">
          <rect
            width="24"
            height="24"
            transform="rotate(90 12 12)"
            opacity="0"
          />

          <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
        </g>
      </g>
    </svg>
  ),
  right_arrow: (
    className = undefined,
    fill = '#FFFF',
    width = '100%',
    height = '100%',
  ) => (
    <svg
      className={className}
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2">
        <g data-name="arrow-ios-forward">
          <rect
            width="24"
            height="24"
            transform="rotate(-90 12 12)"
            opacity="0"
          />

          <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />
        </g>
      </g>
    </svg>
  ),
  dot_small: (
    className = undefined,
    fill = '#FFFF',
    width = '100%',
    height = '100%',
  ) => (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="2" fill={fill} />
    </svg>
  ),
  dot_big: (
    className = undefined,
    fill = '#FFFF',
    width = '100%',
    height = '100%',
  ) => (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
        fill={fill}
      />
    </svg>
  ),
  break_link: (
    className = undefined,
    fill = '#FFFF',
    width = '100%',
    height = '100%',
  ) => (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.68377 0.0513439C8.20771 -0.123304 8.77403 0.159856 8.94868 0.683799L9.94868 3.6838C10.1233 4.20774 9.84017 4.77406 9.31622 4.94871C8.79228 5.12336 8.22596 4.8402 8.05131 4.31625L7.05131 1.31625C6.87667 0.792312 7.15983 0.225992 7.68377 0.0513439Z"
        fill={fill}
      />
      <path
        d="M20.8596 9.54591L16.9706 13.435C16.58 13.8255 15.9469 13.8255 15.5563 13.435C15.1658 13.0445 15.1658 12.4113 15.5563 12.0208L19.4454 8.1317C20.4217 7.15539 20.4217 5.57247 19.4454 4.59616C18.4691 3.61985 16.8862 3.61985 15.9099 4.59616L12.0208 8.48525C11.6303 8.87578 10.9971 8.87578 10.6066 8.48525C10.2161 8.09473 10.2161 7.46156 10.6066 7.07104L14.4957 3.18195C16.253 1.42459 19.1023 1.42459 20.8596 3.18195C22.617 4.93931 22.617 7.78855 20.8596 9.54591Z"
        fill={fill}
      />
      <path
        d="M3.18198 14.4957L7.07106 10.6066C7.46159 10.216 8.09475 10.216 8.48528 10.6066C8.8758 10.9971 8.8758 11.6303 8.48528 12.0208L4.59619 15.9099C3.61988 16.8862 3.61988 18.4691 4.59619 19.4454C5.5725 20.4217 7.15541 20.4217 8.13172 19.4454L12.0208 15.5563C12.4113 15.1658 13.0445 15.1658 13.435 15.5563C13.8256 15.9468 13.8256 16.58 13.435 16.9705L9.54594 20.8596C7.78858 22.617 4.93934 22.617 3.18198 20.8596C1.42462 19.1023 1.42462 16.253 3.18198 14.4957Z"
        fill={fill}
      />
      <path
        d="M2.29289 2.29292C2.68341 1.9024 3.31658 1.9024 3.7071 2.29292L6.7071 5.29292C7.09763 5.68344 7.09763 6.31661 6.7071 6.70713C6.31658 7.09766 5.68341 7.09766 5.29289 6.70713L2.29289 3.70713C1.90237 3.31661 1.90237 2.68344 2.29289 2.29292Z"
        fill={fill}
      />
      <path
        d="M20.2929 21.7071C20.6834 22.0977 21.3166 22.0977 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.7071 17.2929C18.3166 16.9024 17.6834 16.9024 17.2929 17.2929C16.9024 17.6834 16.9024 18.3166 17.2929 18.7071L20.2929 21.7071Z"
        fill={fill}
      />
      <path
        d="M15.0513 23.3163C15.226 23.8402 15.7923 24.1234 16.3162 23.9487C16.8402 23.7741 17.1233 23.2077 16.9487 22.6838L15.9487 19.6838C15.774 19.1599 15.2077 18.8767 14.6838 19.0513C14.1598 19.226 13.8767 19.7923 14.0513 20.3163L15.0513 23.3163Z"
        fill={fill}
      />
      <path
        d="M0.0513134 7.6838C-0.123334 8.20774 0.159826 8.77406 0.683769 8.94871L3.68377 9.94871C4.20771 10.1234 4.77403 9.8402 4.94868 9.31625C5.12333 8.79231 4.84017 8.22599 4.31622 8.05134L1.31622 7.05134C0.792281 6.8767 0.225961 7.15986 0.0513134 7.6838Z"
        fill={fill}
      />
      <path
        d="M23.3162 15.0513C23.8402 15.226 24.1233 15.7923 23.9487 16.3163C23.774 16.8402 23.2077 17.1234 22.6838 16.9487L19.6838 15.9487C19.1598 15.7741 18.8767 15.2077 19.0513 14.6838C19.226 14.1599 19.7923 13.8767 20.3162 14.0513L23.3162 15.0513Z"
        fill={fill}
      />
    </svg>
  ),
};

function IconRender(icon: string) {
  return icons[icon] || icons.break_link;
}

export { IconRender };
