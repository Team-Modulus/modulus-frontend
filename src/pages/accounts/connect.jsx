import React, { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { mainContext } from '../../context/AuthContext';

const ConnectGoogleAdsButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const {token}= useContext(mainContext)

  const handleConnect = async () => {
    setLoading(true);

    try {


      const res = await axios.get("http://localhost:5000/api/google/connect", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const { url } = res.data;
      window.location.href = url; // Redirect to Google OAuth
    } catch (err) {
      console.error("Error connecting Google Ads:", err);
      alert("Connection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={handleConnect}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow transition duration-300"
        disabled={loading}
      >
        {loading ? "Connecting..." : "Connect Google Ads"}
      </button>

      {isConnected && <p className="text-green-500">Google Ads Connected ✅</p>}
    </div>
  );
};

export default ConnectGoogleAdsButton;
