import { HomeFooter } from '../home-footer';
import { homePageContainerStyle, homePageInnerStyle } from './home-page.style';
import { HomeHero } from '../home-hero';
import { HomeHeader } from '../home-header';
import { HomeNavbar } from '../home-navbar';

type HomePageProps = {
  isLoading: boolean;
  isAuthenticated: boolean;
};

export const HomePage = ({ isAuthenticated, isLoading }: HomePageProps) => {
  return (
    <div className="h-full dark:bg-900">
      <main className="h-full pt-40">
        <HomeNavbar isAuthenticated={isAuthenticated} isLoading={isLoading} />
        <div className={homePageContainerStyle}>
          <div className={homePageInnerStyle}>
            <HomeHeader isAuthenticated={isAuthenticated} isLoading={isLoading} />
            <HomeHero />
          </div>
          <HomeFooter />
        </div>
      </main>
    </div>
  );
};
