import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import API from "../constants/Api";

export function useIntegrationStatus() {
  const [integrations, setIntegrations] = useState({
    googleAds: false,
    facebookAds: false,
    mailchimp: false,
    googleAnalytics: false,
    shopify: false,
    stripe: false,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkStatus = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(API.Connect.status, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const platforms = res?.data?.platforms || {};
        setIntegrations({
          googleAds: platforms.googleAds?.connected === true,
          facebookAds: platforms.facebookAds?.connected === true,
          mailchimp: platforms.mailchimp?.connected === true,
          googleAnalytics: platforms.googleAnalytics?.connected === true,
          shopify: platforms.shopify?.connected === true,
          stripe: platforms.stripe?.connected === true,
        });

      } catch (err) {
        console.error("Error checking integration status", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    checkStatus();
  }, []);

  // true if any integration is connected
  const connected = useMemo(
    () => Object.values(integrations).some((val) => val === true),
    [integrations]
  );

  return { integrations, loading, error, connected };
}
