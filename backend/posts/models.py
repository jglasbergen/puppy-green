from django.db import models

# Create your models here.
class Post(models.Model):
    """Model definition for Post."""

    title = models.CharField(null=False, max_length=50)
    excerpt = models.TextField(null=False)
    image = models.URLField(null=True, max_length=200)

    class Meta:
        """Meta definition for Post."""

        verbose_name = 'Post'
        verbose_name_plural = 'Posts'

    def __str__(self):
        """Unicode representation of Post."""
        pass
