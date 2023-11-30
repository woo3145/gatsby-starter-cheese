import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface SiteConfiguration {
  featureToggles: {
    useDarkModeToggle: boolean;
  };
  logo: {
    text: string;
  };
  navigation: {
    header: {
      label: string;
      url: string;
    }[];
  };
}

export const useSiteConfiguration = () => {
  const data = useStaticQuery<
    AllSettingsQueryResult<{ siteConfiguration: SiteConfiguration }>
  >(siteConfigurationQuery);
  return data.allContentsJson.nodes[0].siteConfiguration;
};

export const siteConfigurationQuery = graphql`
  query {
    allContentsJson {
      nodes {
        siteConfiguration {
          featureToggles {
            useDarkModeToggle
          }
          logo {
            text
          }
          navigation {
            header {
              label
              url
            }
          }
        }
      }
    }
  }
`;
