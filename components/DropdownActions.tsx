"use client"

import React, { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, AlertTriangle, X } from "lucide-react"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"

type Option = {
  label: string
  onClick?: () => void
  confirm?: boolean
}

type Props = {
  options: Option[]
}

const DropdownActions: React.FC<Props> = ({ options }) => {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null)
  const [showAgain, setShowAgain] = useState(true)

  const handleItemClick = (option: Option) => {
    if (option.confirm && showAgain) {
      setPendingAction(() => option.onClick)
      setConfirmOpen(true)
    } else {
      option.onClick?.()
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="rounded-none  bg-[#F3F3F3] text-[16px] font-[500] text-[#666666]">
          {options.map((option, i) => (
            <DropdownMenuItem className="cursor-pointer" key={i} onClick={() => handleItemClick(option)}>
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent className="w-[320px] md:w-[593px] rounded-[8px] p-6 gap-[10px]">
          <AlertDialogHeader className="mb-2 ">
            <AlertDialogTitle className=" flex items-center justify-between text-[#4290E9] text-[18px] font-[600] border-b-[1px] border-[#E4E4E4] pb-2">
              CONFIRMATION
              <AlertDialogCancel className="border-none !shadow-none">
                <X className="w-[18px]  cursor-pointer text-[#7D7D7D]" />
              </AlertDialogCancel>
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-[#EA3E3E] mt-1 w-[41px]" />
            <AlertDialogDescription className="text-[14px] font-[400px] text-[#666666]">
              Are you sure you want to take this action? This cannot be undone and you will have to re-enter the information.
            </AlertDialogDescription>
          </div>
          <div className="mt-4 flex items-center gap-2 border-b-[1px] border-[#E4E4E4] pb-2">
            <input
              type="checkbox"
              id="no-show"
              checked={!showAgain}
              onChange={() => setShowAgain(!showAgain)}
              className="accent-[#0078D4]"
            />
            <label htmlFor="no-show" className="text-[14px] font-[400px] text-[#666666]">Do not show again.</label>
          </div>
          <AlertDialogFooter className="mt-2">
            <AlertDialogCancel className="bg-white w-[180px] h-[44px] border border-[#0078D4] text-[#0078D4] hover:bg-[#f1f8ff]">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-[#4290E9] text-white hover:bg-[#005fb8] w-[180px] h-[44px]"
              onClick={() => {
                pendingAction?.()
                setConfirmOpen(false)
              }}
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default DropdownActions
