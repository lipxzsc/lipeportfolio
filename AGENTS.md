<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use the shared Button component for portfolio navigation and download actions, and fixed-size icon slots with shrink-safe text containers to keep controls consistent across devices.
- Detect viewport and browser capabilities after hydration rather than relying on device names or user-agent strings; keep layout CSS-driven and reduce effects for limited devices, data saving, reduced motion, and hidden tabs.
