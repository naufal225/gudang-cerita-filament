import tkinter as tk

root = tk.Tk()
root.title("Pack")
root.geometry("300x300")

header = tk.Label(root, text="Header (Side = Top, Fill = x)", bg="blue", fg="white")
header.pack(side="top", fill="x")

root.mainloop()