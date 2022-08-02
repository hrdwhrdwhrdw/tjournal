import React from "react";
import clsx from "clsx";
import { SideComments } from "../components/SideComments";
import Navbar from "../components/Navbar";

interface MainLayoutProps {
  hideComments?: boolean;
  contentFullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
  className
}) => {
  return (
    <div className={clsx("wrapper", className)}>
      <Navbar />
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
