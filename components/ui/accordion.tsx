import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionContextValue {
  openItems: string[]
  toggleItem: (value: string) => void
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined)

function useAccordion() {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion")
  }
  return context
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  defaultValue?: string | string[]
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ type = "single", defaultValue, className, children, ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState<string[]>(
      defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
    )

    const toggleItem = React.useCallback(
      (value: string) => {
        setOpenItems((prev) => {
          if (type === "single") {
            return prev.includes(value) ? [] : [value]
          }
          return prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        })
      },
      [type]
    )

    return (
      <AccordionContext.Provider value={{ openItems, toggleItem }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("border border-neutral-200 rounded-lg", className)}
        {...props}
      />
    )
  }
)
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ value, className, children, ...props }, ref) => {
    const { openItems, toggleItem } = useAccordion()
    const isOpen = openItems.includes(value)

    return (
      <button
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between p-4 text-left font-semibold transition-all hover:bg-neutral-50",
          className
        )}
        onClick={() => toggleItem(value)}
        {...props}
      >
        {children}
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ value: _value, className, children, ...props }, ref) => {
    const { openItems } = useAccordion()
    const isOpen = openItems.includes(_value)

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden transition-all",
          isOpen ? "max-h-96" : "max-h-0"
        )}
        {...props}
      >
        <div className={cn("p-4 pt-0 text-neutral-600", className)}>
          {children}
        </div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
