import { fromEvent, Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export function media(query: string): Observable<boolean> {
  const mediaQuery = window.matchMedia(query);
  return fromEvent<MediaQueryList>(mediaQuery, 'change').pipe(
    startWith(mediaQuery),
    map((list: MediaQueryList) => list.matches)
  );
}

// Usage
media('(max-width: 767px)').subscribe((matches) =>
  console.log(matches) // true or false
);
