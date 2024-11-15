import React from "react";
import {
  TfiBarChart,
  TfiBell,
  TfiClipboard,
  TfiCommentsSmiley,
  TfiFiles,
  TfiImage,
  TfiMouseAlt,
  TfiPowerOff,
  TfiShare,
  TfiUser,
  TfiVideoCamera,
} from "react-icons/tfi";

export default function ProfileShortcut() {
  return (
    <div className="widget">
      <h4 className="widget-title">Shortcuts</h4>
      <ul className="naves">
        <li>
          <TfiClipboard />
          <a href="newsfeed.html" title="">
            News feed
          </a>
        </li>
        <li>
          <TfiMouseAlt />
          <a href="inbox.html" title="">
            Inbox
          </a>
        </li>
        <li>
          <TfiFiles />
          <a href="fav-page.html" title="">
            My pages
          </a>
        </li>
        <li>
          <TfiUser />
          <a href="timeline-friends.html" title="">
            friends
          </a>
        </li>
        <li>
          <TfiImage />
          <a href="timeline-photos.html" title="">
            images
          </a>
        </li>
        <li>
          <TfiVideoCamera />
          <a href="timeline-videos.html" title="">
            videos
          </a>
        </li>
        <li>
          <TfiCommentsSmiley />
          <a href="messages.html" title="">
            Messages
          </a>
        </li>
        <li>
          <TfiBell />
          <a href="notifications.html" title="">
            Notifications
          </a>
        </li>
        <li>
          <TfiShare />
          <a href="people-nearby.html" title="">
            People Nearby
          </a>
        </li>
        <li>
          <TfiBarChart />
          <a href="insights.html" title="">
            insights
          </a>
        </li>
        <li>
          <TfiPowerOff />
          <a href="landing.html" title="">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
