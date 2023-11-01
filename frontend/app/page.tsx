"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TaskInput from "@/component/TaskInput";
import ProgressBar from "@/component/ProgressBar";
import BranchDiagram from "@/component/BranchDiagram";
import TaskList from "@/component/TaskList";

const data = {
  frontend: [
    {
      taskName: "UIデザイン作成",
      branchName: "feature/ui-design",
      date: "2023-01-14",
      check: false,
    },
    {
      taskName: "ToDo追加機能の実装",
      branchName: "feature/add-todo",
      date: "2023-01-16",
      check: false,
    },
    {
      taskName: "ToDo一覧表示機能の実装",
      branchName: "feature/list-todos",
      date: "2023-01-18",
      check: false,
    },
    {
      taskName: "ToDo削除機能の実装",
      branchName: "feature/delete-todo",
      date: "2023-01-20",
      check: false,
    },
    {
      taskName: "ToDo編集機能の実装",
      branchName: "feature/edit-todo",
      date: "2023-01-22",
      check: false,
    },
  ],
  backend: [
    {
      taskName: "データベース設計",
      branchName: "feature/db-design",
      date: "2023-01-15",
      check: false,
    },
    {
      taskName: "API設計",
      branchName: "feature/api-design",
      date: "2023-01-17",
      check: false,
    },
    {
      taskName: "APIの実装：ToDo追加",
      branchName: "feature/api-add-todo",
      date: "2023-01-19",
      check: false,
    },
    {
      taskName: "APIの実装：ToDo一覧取得",
      branchName: "feature/api-list-todos",
      date: "2023-01-21",
      check: false,
    },
    {
      taskName: "APIの実装：ToDo削除",
      branchName: "feature/api-delete-todo",
      date: "2023-01-23",
      check: false,
    },
    {
      taskName: "APIの実装：ToDo編集",
      branchName: "feature/api-edit-todo",
      date: "2023-01-25",
      check: false,
    },
  ],
};

function HomePage() {
  return (
    <div className="grid grid-rows-[1fr,4fr] h-screen">
      <TaskInput />
      <div className="grid grid-cols-2 mx-2">
        <div className="flex flex-col items-center space-y-4">
          <ProgressBar />
          <TaskList
            color={"blue"}
            title={"フロントエンド"}
            tasks={data.frontend}
          />
          <TaskList color={"red"} title={"バックエンド"} tasks={data.backend} />
        </div>
        <div className="flex flex-col items-center">
          <BranchDiagram />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
