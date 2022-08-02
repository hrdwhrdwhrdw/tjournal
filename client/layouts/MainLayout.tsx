import React from "react";
import clsx from "clsx";
import { SideComments } from "../components/SideComments";
import Navbar from "../components/Navbar";

interface MainLayoutProps {
  hideComments?: boolean;
  contentFullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
  hideMenu?: boolean
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
  className,
  hideMenu
}) => {
  return (
    <div className={clsx("wrapper", className)}>
      {!hideMenu && <Navbar />}
      <div className={clsx("content", { "content--full": contentFullWidth })}>
        {children}
      </div>
      {!hideComments && (
        <div className="rightSide">
          <SideComments />
        </div>
      )}
    </div>
  );
};
