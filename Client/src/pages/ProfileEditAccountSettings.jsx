import { useMutation } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { UPDATE_USER_SETTINGS } from "../utilities/graphql_mutations";
import { handleApolloErrors } from "../utilities/utilities";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

export default function ProfileEditAccountSettings() {
  const { auth, updateUserInfo } = useContext(AuthContext);
  const { profileId } = useParams();
  const navigate = useNavigate();
  const [updateUserSettings] = useMutation(UPDATE_USER_SETTINGS);
  const [theme, setTheme] = useState("DAY");
  const [privacy, setPrivacy] = useState({
    hide_profile: false,
    hide_profile_photo: false,
    show_me_online: true,
    expose_author_name: true,
  });
  const [notifications, setNotifications] = useState({
    enable_notification: true,
    enable_notification_sound: true,
    enable_sms: true,
  });
  const [interactions, setInteractions] = useState({
    enable_tagging: true,
    enable_friend_requests: true,
    enable_follow_me: true,
  });

  useEffect(() => {
    if (auth && auth.user._id !== profileId) {
      navigate("/");
    }
  }, [auth, profileId, navigate]);

  useEffect(() => {
    if (auth && auth.user) {
      const { settings } = auth.user;
      setPrivacy((prevPrivacy) => ({
        ...prevPrivacy,
        expose_author_name: settings.privacy.expose_author_name,
        hide_profile: settings.privacy.hide_profile,
        hide_profile_photo: settings.privacy.hide_profile_photo,
        show_me_online: settings.privacy.show_me_online,
      }));

      setNotifications((prevNotifications) => ({
        ...prevNotifications,
        enable_notification: settings.notifications.enable_notification,
        enable_notification_sound:
          settings.notifications.enable_notification_sound,
        enable_sms: settings.notifications.enable_sms,
      }));

      setInteractions((prevInteractions) => ({
        ...prevInteractions,
        enable_follow_me: settings.interactions.enable_follow_me,
        enable_friend_requests: settings.interactions.enable_friend_requests,
        enable_tagging: settings.interactions.enable_tagging,
      }));

      setTheme(settings?.display?.theme);
    }
  }, [auth]);

  const handleThemeDisplay = (e) => {
    setTheme(e.target.checked ? "NIGHT" : "DAY");
  };

  const handleInteractions = (e) => {
    setInteractions((prevInteractions) => ({
      ...prevInteractions,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleNotifications = (e) => {
    setNotifications((prevNotifications) => ({
      ...prevNotifications,
      [e.target.name]: e.target.checked,
    }));
  };

  const handlePrivacy = (e) => {
    setPrivacy((prevPrivacy) => ({
      ...prevPrivacy,
      [e.target.name]: e.target.checked,
    }));
  };

  const updateSettings = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateUserSettings({
        variables: {
          settings: {
            notifications: {
              ...notifications,
            },
            privacy: {
              ...privacy,
            },
            display: {
              theme,
            },
            interactions: {
              ...interactions,
            },
          },
        },
      });

      if (data) {
        updateUserInfo(data.updateSettings);
        toast.success("Settings updated successfully");
      }
    } catch (error) {
      handleApolloErrors(error);
    }
  };
  return (
    <div class="central-meta">
      <div class="onoff-options">
        <h5 class="f-title">
          <i class="ti-settings"></i>account setting
        </h5>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate
        </p>
        <form onSubmit={updateSettings}>
          <div class="setting-row">
            <span>Website Theme</span>
            <p>
              Enable this to change the look and feel of the website from light
              to dark
            </p>
            <input
              type="checkbox"
              id="switch07"
              onChange={handleThemeDisplay}
              checked={theme === "NIGHT"}
            />
            <label
              htmlFor="switch07"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div class="setting-row">
            <span>Enable friend requests</span>
            <p>Off this if you don't want people to send you friend requests</p>
            <input
              type="checkbox"
              id="switch00"
              name="enable_friend_requests"
              checked={interactions.enable_friend_requests}
              onChange={handleInteractions}
            />
            <label
              htmlFor="switch00"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div class="setting-row">
            <span>Enable follow me</span>
            <p>Off this if you don't want people to follow you</p>
            <input
              type="checkbox"
              id="switch01"
              name="enable_follow_me"
              checked={interactions.enable_follow_me}
              onChange={handleInteractions}
            />
            <label
              htmlFor="switch01"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div class="setting-row">
            <span>Enable tagging</span>
            <p>Off this if you don't want friends to tag you on their posts</p>
            <input
              type="checkbox"
              id="switch04"
              name="enable_tagging"
              checked={interactions.enable_tagging}
              onChange={handleInteractions}
            />
            <label
              htmlFor="switch04"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div class="setting-row">
            <span>Enable sound Notification</span>
            <p>
              You'll hear notification sound when someone sends you a private
              message
            </p>
            <input
              type="checkbox"
              id="switch05"
              name="enable_notification_sound"
              checked={notifications.enable_notification_sound}
              onChange={handleNotifications}
            />
            <label
              htmlFor="switch05"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div class="setting-row">
            <span>Send me notifications</span>
            <p>
              Send me notification emails my friends like, share or message me
            </p>
            <input
              type="checkbox"
              id="switch02"
              name="enable_notification"
              checked={notifications.enable_notification}
              onChange={handleNotifications}
            />
            <label
              htmlFor="switch02"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div class="setting-row">
            <span>Text messages</span>
            <p>Send me messages to my cell phone</p>
            <input
              type="checkbox"
              id="switch03"
              name="enable_sms"
              checked={notifications.enable_sms}
              onChange={handleNotifications}
            />
            <label
              htmlFor="switch03"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div class="setting-row">
            <span>Hide Profile</span>
            <p>Enable this to hide your profile from public</p>
            <input
              type="checkbox"
              id="switch08"
              name="hide_profile"
              checked={privacy.hide_profile}
              onChange={handlePrivacy}
            />
            <label
              htmlFor="switch08"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div class="setting-row">
            <span>Hide Profile Photo</span>
            <p>Enable this to hide your profile photo from public</p>
            <input
              type="checkbox"
              id="switch09"
              name="hide_profile_photo"
              checked={privacy.hide_profile_photo}
              onChange={handlePrivacy}
            />
            <label
              htmlFor="switch09"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div class="setting-row">
            <span>Show Online Status</span>
            <p>Enable this to show your online status when you are online</p>
            <input
              type="checkbox"
              id="switch10"
              name="show_me_online"
              checked={privacy.show_me_online}
              onChange={handlePrivacy}
            />
            <label
              htmlFor="switch10"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div class="setting-row">
            <span>Expose Author Name</span>
            <p>Enable this to expose your first and last name to public</p>
            <input
              type="checkbox"
              id="switch11"
              name="expose_author_name"
              checked={privacy.expose_author_name}
              onChange={handlePrivacy}
            />
            <label
              htmlFor="switch11"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div class="submit-btns">
            <button type="button" class="mtr-btn">
              <span>Cancel</span>
            </button>{" "}
            <button type="submit" class="mtr-btn">
              <span>Update</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
