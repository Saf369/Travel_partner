export default function SettingsScreen() {
  return (
    <div className="flex flex-col flex-1 w-full p-6 md:p-10 lg:px-14 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-10 pt-4 md:pt-0">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Settings</h1>
        <p className="text-lg text-text-secondary">
          Manage your account and preferences
        </p>
      </div>

      {/* Content */}
      <div className="bg-background-element border border-background-selected p-6 md:p-10 rounded-3xl max-w-3xl shadow-sm">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold border-b border-background-selected pb-2">Account</h3>
            <div className="py-2 flex justify-between items-center">
              <span className="font-medium">Email</span>
              <span className="text-text-secondary">user@example.com</span>
            </div>
            <div className="py-2 flex justify-between items-center">
              <span className="font-medium">Subscription</span>
              <span className="bg-foreground text-background px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Pro</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mt-4">
            <h3 className="text-lg font-semibold border-b border-background-selected pb-2">Preferences</h3>
            <div className="py-2 flex justify-between items-center">
              <span className="font-medium">Theme</span>
              <span className="text-text-secondary">System Default</span>
            </div>
            <div className="py-2 flex justify-between items-center">
              <span className="font-medium">Notifications</span>
              <span className="text-text-secondary">Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
