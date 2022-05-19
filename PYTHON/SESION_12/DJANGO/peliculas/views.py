from django.views import generic

from .models import Director, Pelicula

class IndexView(generic.ListView):
    template_name = 'movies/directores.html'
    model = Director

class DirectorView(generic.DetailView):
    template_name = 'movies/director.html'
    model = Director

class PeliculaView(generic.DetailView):
    template_name = 'movies/pelicula.html'
    model = Pelicula