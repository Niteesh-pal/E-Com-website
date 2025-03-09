import { IconRender } from '../../assets/icons';

const Icon = (
  icon: string,
  className?: string | undefined,
  fill?: string | undefined,
  width?: string | number | undefined,
  height?: string | number | undefined,
) => {
  if (!className) {
    className = undefined;
  }
  return IconRender(icon)(className, fill, width, height);
};
export default Icon;
