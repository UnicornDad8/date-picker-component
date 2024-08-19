"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DatetimePicker } from "@/components/ui/datetime-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Home() {
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <>
      <main className="flex flex-col items-center justify-center relative">
        <div className="w-full h-[300px] bg-[#53d4ad] rounded-br-[92px]" />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[286px] absolute top-[60px] bg-white shadow-lg justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP HH:mm") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-4">
            <DatetimePicker selected={date} setDate={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </main>
    </>
  );
}
