import React from 'react';
import {Redirect, Switch} from 'react-router-dom';

import {RouteWithLayout} from './common';
import {Main as MainLayout} from './layouts';

import {BlogArticle as BlogArticleView, BlogSearch as BlogSearchView, Home as HomeView,} from './views';
import StoryMsCarlene from "./views/Stories/MsCarlene";
import StoryFlorenceFetzer from "./views/Stories/FlorenceFetzer";
import StoryDannyLewis from "./views/Stories/DannyLewis";
import StoryCiaraWhite from "./views/Stories/CiaraWhite";

const Routes = () => {
  return (
    <Switch>
    {/*<Route exact path="/" component={HomeView} />*/}
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={BlogSearchView}
        exact
        layout={MainLayout}
        path="/stories"
      />
      <RouteWithLayout
        component={BlogArticleView}
        exact
        layout={MainLayout}
        path="/sample-blog"
      />
      <RouteWithLayout
        component={StoryMsCarlene}
        exact
        layout={MainLayout}
        path="/ms-carlene"
      />
      <RouteWithLayout
        component={StoryFlorenceFetzer}
        exact
        layout={MainLayout}
        path="/florence-fetzer"
      />
      <RouteWithLayout
        component={StoryDannyLewis}
        exact
        layout={MainLayout}
        path="/danny-lewis"
      />
      <RouteWithLayout
        component={StoryCiaraWhite}
        exact
        layout={MainLayout}
        path="/ciara-white"
      />
    </Switch>
    // <Switch>
    //   <Redirect exact from="/" to="/home" />
    //   <RouteWithLayout
    //     component={HomeView}
    //     exact
    //     layout={MainLayout}
    //     path="/home"
    //   />
    //   <RouteWithLayout
    //     component={CareerListingView}
    //     exact
    //     layout={MainLayout}
    //     path="/career-listing"
    //   />
    //   <RouteWithLayout
    //     component={CareerListingMinimalView}
    //     exact
    //     layout={MainLayout}
    //     path="/career-listing-minimal"
    //   />
    //   <RouteWithLayout
    //     component={CareerOpeningView}
    //     exact
    //     layout={MainLayout}
    //     path="/career-opening"
    //   />
    //   <RouteWithLayout
    //     component={ContactPageView}
    //     exact
    //     layout={MainLayout}
    //     path="/contact-page"
    //   />
    //   <RouteWithLayout
    //     component={CoworkingView}
    //     exact
    //     layout={MainLayout}
    //     path="/coworking"
    //   />
    //   <RouteWithLayout
    //     component={ElearningView}
    //     exact
    //     layout={MainLayout}
    //     path="/e-learning"
    //   />
    //   <RouteWithLayout
    //     component={EnterpriseView}
    //     exact
    //     layout={MainLayout}
    //     path="/enterprise"
    //   />
    //   <RouteWithLayout
    //     component={ServiceView}
    //     exact
    //     layout={MainLayout}
    //     path="/service"
    //   />
    //   <RouteWithLayout
    //     component={WebBasicView}
    //     exact
    //     layout={MainLayout}
    //     path="/web-basic"
    //   />
    //   <RouteWithLayout
    //     component={DesktopAppView}
    //     exact
    //     layout={MainLayout}
    //     path="/desktop-app"
    //   />
    //   <RouteWithLayout
    //     component={ExpoView}
    //     exact
    //     layout={MainLayout}
    //     path="/expo"
    //   />
    //   <RouteWithLayout
    //     component={AgencyView}
    //     exact
    //     layout={MainLayout}
    //     path="/agency"
    //   />
    //   <RouteWithLayout
    //     component={StartupView}
    //     exact
    //     layout={MainLayout}
    //     path="/startup"
    //   />
    //   <RouteWithLayout
    //     component={DesignCompanyView}
    //     exact
    //     layout={MainLayout}
    //     path="/design-company"
    //   />
    //   <RouteWithLayout
    //     component={MobileAppView}
    //     exact
    //     layout={MainLayout}
    //     path="/mobile-app"
    //   />
    //   <RouteWithLayout
    //     component={JobListingView}
    //     exact
    //     layout={MainLayout}
    //     path="/job-listing"
    //   />
    //   <RouteWithLayout
    //     component={RentalView}
    //     exact
    //     layout={MainLayout}
    //     path="/rental"
    //   />
    //   <RouteWithLayout
    //     component={CloudHostingView}
    //     exact
    //     layout={MainLayout}
    //     path="/cloud-hosting"
    //   />
    //   <RouteWithLayout
    //     component={LogisticsView}
    //     exact
    //     layout={MainLayout}
    //     path="/logistics"
    //   />
    //   <RouteWithLayout
    //     component={EcommerceView}
    //     exact
    //     layout={MainLayout}
    //     path="/e-commerce"
    //   />
    //   <RouteWithLayout
    //     component={PricingView}
    //     exact
    //     layout={MainLayout}
    //     path="/pricing"
    //   />
    //   <RouteWithLayout
    //     component={AboutView}
    //     exact
    //     layout={MainLayout}
    //     path="/about"
    //   />
    //   <RouteWithLayout
    //     component={HelpCenterView}
    //     exact
    //     layout={MainLayout}
    //     path="/help-center"
    //   />
    //   <RouteWithLayout
    //     component={HelpCenterArticleView}
    //     exact
    //     layout={MainLayout}
    //     path="/help-center-article"
    //   />
    //   <RouteWithLayout
    //     component={PortfolioPageView}
    //     exact
    //     layout={MainLayout}
    //     path="/portfolio-page"
    //   />
    //   <RouteWithLayout
    //     component={PortfolioMasonryView}
    //     exact
    //     layout={MainLayout}
    //     path="/portfolio-masonry"
    //   />
    //   <RouteWithLayout
    //     component={PortfolioGridView}
    //     exact
    //     layout={MainLayout}
    //     path="/portfolio-grid"
    //   />
    //   <RouteWithLayout
    //     component={CompanyTermsView}
    //     exact
    //     layout={MainLayout}
    //     path="/company-terms"
    //   />
    //   <RouteWithLayout
    //     component={ContactPageSidebarMapView}
    //     exact
    //     layout={MainLayout}
    //     path="/contact-sidebar-map"
    //   />
    //   <RouteWithLayout
    //     component={ContactPageCoverView}
    //     exact
    //     layout={MainLayout}
    //     path="/submit"
    //   />
    //   <RouteWithLayout
    //     component={AboutSideCoverView}
    //     exact
    //     layout={MainLayout}
    //     path="/about-side-cover"
    //   />
    //   <RouteWithLayout
    //     component={BlogSearchView}
    //     exact
    //     layout={MainLayout}
    //     path="/search"
    //   />
    //   <RouteWithLayout
    //     component={BlogNewsroomView}
    //     exact
    //     layout={MainLayout}
    //     path="/blog-newsroom"
    //   />
    //   <RouteWithLayout
    //     component={BlogArticleView}
    //     exact
    //     layout={MainLayout}
    //     path="/blog-article"
    //   />
    //   <RouteWithLayout
    //     component={BlogReachViewView}
    //     exact
    //     layout={MainLayout}
    //     path="/blog-reach-view"
    //   />
    //   <RouteWithLayout
    //     component={PasswordResetCoverView}
    //     exact
    //     layout={MinimalLayout}
    //     path="/password-reset-cover"
    //   />
    //   <RouteWithLayout
    //     component={PasswordResetSimpleView}
    //     exact
    //     layout={MinimalLayout}
    //     path="/password-reset-simple"
    //   />
    //   <RouteWithLayout
    //     component={SigninSimpleView}
    //     exact
    //     layout={MinimalLayout}
    //     path="/signin-simple"
    //   />
    //   <RouteWithLayout
    //     component={SigninCoverView}
    //     exact
    //     layout={MinimalLayout}
    //     path="/signin-cover"
    //   />
    //   <RouteWithLayout
    //     component={SignupSimpleView}
    //     exact
    //     layout={MinimalLayout}
    //     path="/signup-simple"
    //   />
    //   <RouteWithLayout
    //     component={SignupCoverView}
    //     exact
    //     layout={MinimalLayout}
    //     path="/signup-cover"
    //   />
    //   <RouteWithLayout
    //     component={AccountView}
    //     exact
    //     layout={MainLayout}
    //     path="/account/:pageId?"
    //   />
    //   <RouteWithLayout
    //     component={NotFoundView}
    //     exact
    //     layout={MinimalLayout}
    //     path="/not-found"
    //   />
    //   <RouteWithLayout
    //     component={NotFoundCoverView}
    //     exact
    //     layout={MinimalLayout}
    //     path="/not-found-cover"
    //   />
    //   <Redirect to="/not-found-cover" status="404" />
    // </Switch>
  );
};

export default Routes;
